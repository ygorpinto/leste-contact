import { useContext, useState } from "react";
import { ContactsContext } from "../../context/context";
import Loading from "../Loading/Loading";
import ContactListStyle from "./ContactsListStyle";
import EditStyles from '../EditUser/EditStyles'

const ContactsList = () => {

    const {
        filtredAll,
        all,
        update,
        setUpdate,
        isEditOpen,
        setIsEditOpen,
    } = useContext(ContactsContext);

    const [newavatar, setnewAvatar] = useState()
    const [newname, setnewName] = useState()
    const [newlastname, setnewLastName] = useState()
    const [newemail, setnewEmail] = useState()
    const [newgenderValue, setnewGenderValue] = useState()
    const [newlanguageValue, setnewLanguageValue] = useState()
    const [newbirthDayValue, setnewBirthDayValue] = useState()


    let newContact = {
        avatar: newavatar,
        first_name: newname,
        last_name: newlastname,
        email: newemail,
        gender: newgenderValue,
        language: newlanguageValue,
        birthday: newbirthDayValue
    };

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
                    console.log(index);
                    setIsEditOpen(isEditOpen ? false : true);
                }
                const editItem = () => {
                    console.log(index);
                    all.splice(index - 1, 1, newContact)
                    localStorage.setItem('contacts', JSON.stringify(all));
                    setUpdate(update ? false : true);
                    openEditMenu();
                }
                return (
                    <td className="contactList" key={item.id}>
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
                            <button
                                onClick={openEditMenu}
                            ><img alt="edit" src="edit-11-xxl.png" /></button>
                            <button
                                onClick={deleteItem}
                            ><img alt="delete" src="download.png" /></button>
                        </div>
                        {isEditOpen &&
                            <EditStyles>
                                <div className="EditContainer" key={index}>
                                        <button
                                            onClick={openEditMenu}
                                            className="close"
                                        ><img alt="close" src="close.png" /></button>
                                    <input
                                        value={newavatar}
                                        onChange={e => setnewAvatar(e.target.value)}
                                        placeholder="Nova URL de Avatar"
                                        type="text" />
                                    <input
                                        value={newname}
                                        onChange={e => setnewName(e.target.value)}
                                        placeholder="Novo Nome"
                                        type="text" />
                                    <input
                                        value={newlastname}
                                        onChange={e => setnewLastName(e.target.value)}
                                        placeholder="Novo Sobrenome"
                                        type="text" />
                                    <input
                                        value={newemail}
                                        onChange={e => setnewEmail(e.target.value)}
                                        placeholder="Novo Email"
                                        type="text" />
                                    <div className="gender">
                                        <label>Novo Gênero</label>
                                        <select
                                            value={newgenderValue}
                                            onChange={e => setnewGenderValue(e.target.value)}
                                        >
                                            <option>M</option>
                                            <option>F</option>
                                        </select>
                                    </div>
                                    <input
                                        value={newlanguageValue}
                                        onChange={e => setnewLanguageValue(e.target.value)}
                                        placeholder="Novo Idioma"
                                        type="text" />
                                    <input
                                        value={newbirthDayValue}
                                        onChange={e => setnewBirthDayValue(e.target.value)}
                                        placeholder="Nova data de Nascimento"
                                        type="text" />
                                    <button
                                        className="updateContact"
                                        onClick={editItem}
                                    >Atualizar Contato</button>
                                </div>
                            </EditStyles>}
                    </td>
                )
            }) : (<Loading />)}
        </ContactListStyle>
    )
}

export default ContactsList;