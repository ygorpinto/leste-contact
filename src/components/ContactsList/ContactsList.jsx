import { useContext } from "react";
import { ContactsContext } from "../../context/context";
import Loading from "../Loading/Loading";
import ContactListStyle from "./ContactsListStyle";
import Edit from "../EditUser/Edit";

const ContactsList = () => {

    const {
        filtredAll,
        all,
        update,
        setUpdate,
        isEditOpen,
        setIsEditOpen,
        newContact,
        isEditConfirm,
        setIsEditConfirm
    } = useContext(ContactsContext);

    const dataAtual = new Date();
    
    return (
        <ContactListStyle>
            <div className="filterMenu">
                <div>Avatar</div>
                <div>Name</div>
                <div>Lastnome</div>
                <div>Email</div>
                <div>Gender</div>
                <div>Language</div>
                <div>Age</div>
                <div>Birthday</div>
                <div>Actions</div>
            </div>
            {typeof filtredAll !== 'undefined' ? filtredAll.map((item, index) => {

                const deleteItem = () => {
                    if (window.confirm('Tem certeza que deseja deletar esse usuário?')) {
                        all.splice(index, 1)
                        alert('Deletado com sucesso!')
                        localStorage.setItem('contacts', JSON.stringify(all));
                        setUpdate(update ? false : true);
                    }
                }
                const openEditMenu = () => {
                    setIsEditOpen(isEditOpen ? false : true);
                }
                const editConfirm = () => {
                    if (newContact.first_name.length === 0 || newContact.email.length === 0){
                        return alert ('Você não pode editar um usuário com valores vazios.')
                    } 
                    if (newContact.birthday.split("-")[0].length !== 4 || newContact.birthday.split("-")[1].length !== 2){
                        return alert ('Favor inserir a data de nascimento no formato AAAA-MM-DD')
                    } 
                    if (newContact.avatar.length === 0){
                        if (!window.confirm('Tem certeza que não vai adicionar uma foto de avatar?')){
                            return alert ('Adicione um avatar!')
                        }
                    } 
                    setIsEditConfirm(isEditConfirm ? false : true);
                    openEditMenu();
                }

                const editItem = () => {
                    console.log(index);
                    all.splice(index, 1, newContact)
                    localStorage.setItem('contacts', JSON.stringify(all));
                    setUpdate(update ? false : true);
                    setIsEditConfirm(isEditConfirm ? false : true);
                }
                return (
                    <div className="contactList" key={item.id}>
                        <img alt="avatar" src={item.avatar} />
                        <div>{item.first_name}</div>
                        <div>{item.last_name}</div>
                        <div>{item.email}</div>
                        <div>{item.gender}</div>
                        <div>{item.language}</div>
                        <div>{dataAtual.getMonth() >= item.birthday.split("-")[1] ?
                            dataAtual.getFullYear() - item.birthday.split("-")[0]
                            : (dataAtual.getFullYear() - item.birthday.split("-")[0]) - 1
                        }</div>
                        <div>{item.birthday}</div>
                        <div className="buttons">
                            {isEditConfirm ? (
                                <button onClick={editItem}><img src="update.png" alt="update"/></button>
                            ) : (
                                <button
                                onClick={openEditMenu}
                            ><img alt="edit" src="edit-11-xxl.png" /></button>
    
                            )}
                            <button
                                onClick={deleteItem}
                            ><img alt="delete" src="download.png" /></button>
                        </div>
                        {isEditOpen &&
                         <Edit
                         edit={editConfirm}
                         close={openEditMenu}
                         />}
                    </div>
                )
            }) : (<Loading />)}
        </ContactListStyle>
    )
}

export default ContactsList;