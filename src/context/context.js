import { createContext, useEffect, useState } from "react";

export const ContactsContext = createContext({});

const ContactsContextProvider = ({ children }) => {

    
    const all = JSON.parse(localStorage.getItem('contacts'));
    
    const [search,setSearch] = useState ('');
    const [randomAvatar, setRandomAvatar] = useState(false);
    const [update,setUpdate] = useState(false);
    
    const contacts = [];

        if (all === null) {
            localStorage.setItem('contacts',JSON.stringify(contacts));
        }

    let dt = new Date()
    let mes = dt.getMonth();
    let ano = dt.getFullYear();
    let verify = 0;

// filter states

    const [addUser, setAddUser] = useState(false);
    const [gender, setGender] = useState();
    const [language, setLanguage] = useState('');
    const [age, setAge] = useState(0);
    const [birthDay, setBirthDay] = useState('');

// newUserStates

    const [avatar,setAvatar] = useState('')
    const [name,setName] = useState('')
    const [lastname,setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [genderValue, setGenderValue] = useState('M')
    const [languageValue, setLanguageValue] = useState('')
    const [birthDayValue,setBirthDayValue] = useState('')

//  update states 
    const [newavatar, setnewAvatar] = useState(avatar)
    const [newname, setnewName] = useState(name)
    const [newlastname, setnewLastName] = useState(lastname)
    const [newemail, setnewEmail] = useState(email)
    const [newgenderValue, setnewGenderValue] = useState(genderValue)
    const [newlanguageValue, setnewLanguageValue] = useState(languageValue)
    const [newbirthDayValue, setnewBirthDayValue] = useState(birthDayValue)

    let newContact = {
        avatar: newavatar,
        first_name: newname,
        last_name: newlastname,
        email: newemail,
        gender: newgenderValue,
        language: newlanguageValue,
        birthday: newbirthDayValue
    };

    const [isEditOpen,setIsEditOpen] = useState(false);
    const [isEditConfirm,setIsEditConfirm] = useState(false);

    useEffect(() => {
        fetchContacts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
            setUpdate(update?false:true)
        },2500);
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        setFiltredResults(all);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[update])

    const fetchContacts = async () => {
        const res = await fetch('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060')
        const data = await res.json();
        if (all.length === 0 && !data.error) {
            data.forEach((item)=>{
                contacts.push(item)
            });
            localStorage.setItem('contacts',JSON.stringify(contacts));
        }
    }

    const [filtredResults, setFiltredResults] = useState(all);

    let randomAvt = 'https://picsum.photos/200'
    let query = search.substring(0,1).toUpperCase().concat(search.substring(1));

    if (filtredResults === undefined || filtredResults === null){
          setFiltredResults([]);
        window.location.reload();
        setTimeout(()=>{
            window.location.reload();
        },300)
        setFiltredResults(all);
    }

    let filtredAll = filtredResults.filter(item=>item.first_name.includes(query));

    if (filtredAll === null || filtredAll === undefined) {
        window.location.reload();
        setFiltredResults(all);
    }
    
    const addNewContact = () => {
        if (birthDayValue.split("-")[0].length !== 4 || typeof birthDayValue.split("-")[1] !== "string") {
           return alert('Favor insira a Data de Nascimento no formato ANO-M??S-DIA')
        } 
        else if (name.length === 0 || email.length === 0) {
            return alert ('Favor preencher Nome e Email')
        }
        else if (birthDayValue.length === 0 || birthDayValue.split("-")[2].length === 0) {
            return alert ('Favor insira a Data de Nascimento no formato ANO-M??S-DIA')
        }
        else if (randomAvatar === false && avatar.length === 0) {
            alert('Seria legal voc?? ter um Avatar, adicione uma URL do avatar ou clique na op????o gerar aleat??rio')
        }
        else {
            let contact = {
                avatar:randomAvatar ? randomAvt : avatar,
                first_name:name,
                last_name:lastname,
                email:email,
                gender:genderValue,
                language:languageValue,
                birthday:birthDayValue
            };
            contacts.push(contact);
            all.forEach((item)=>{
                contacts.push(item);
            })
            localStorage.setItem('contacts',JSON.stringify(contacts));
            alert(`Parab??ns ${name} ${lastname} cadastrado com sucesso.`)

            setUpdate(update ? false : true);
            setRandomAvatar(false);
        }
    }


    let filtredResultsByGender = all.filter((item)=>{
        return item.gender === gender
    })


    let filtredResultsByLanguage = all.filter((item)=>{
        return item.language === language
    })

    let filtredResultsByAge = all.filter((item)=>{
        if (mes >= item.birthday.split("-")[1]) {
            verify = (ano - item.birthday.split("-")[0])
        }
        else {
            verify = (ano - item.birthday.split("-")[0] -1)
        }
        return verify === age
    })

    let filtredResultsByBirthday = all.filter((item)=>{
        return item.birthday.split("-")[1] === birthDay
    })

    return (
        <ContactsContext.Provider
        value={{
            contacts,
            all,
            setGender,
            setLanguage,
            setAddUser,
            setBirthDay,
            setAge,
            age,
            addUser,
            gender,
            language,
            birthDay,
            addNewContact,
            setAvatar,
            setName,
            setLastName,
            setEmail,
            setGenderValue,
            setLanguageValue,
            setBirthDayValue,
            filtredResultsByGender,
            filtredResultsByLanguage,
            filtredResultsByAge,
            filtredResultsByBirthday,
            setSearch,
            filtredAll,
            filtredResults,
            setFiltredResults,
            setRandomAvatar,
            randomAvatar,
            update,
            setUpdate,
            isEditOpen,
            setIsEditOpen,
            newavatar,
            setnewAvatar,
            newname,
            setnewName,
            newlastname,
            setnewLastName,
            newgenderValue, 
            setnewGenderValue,
            newemail,
            setnewEmail,
            newlanguageValue,
            setnewLanguageValue,
            newbirthDayValue,
            setnewBirthDayValue,
            newContact,
            isEditConfirm,
            setIsEditConfirm
        }}
        >
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider;