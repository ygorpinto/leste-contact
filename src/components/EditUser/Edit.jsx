import { useContext } from "react";
import { ContactsContext } from "../../context/context";
import EditStyles from "./EditStyles";

const Edit = ({ close,edit }) => {

    const { 
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
        setnewBirthDayValue,} = useContext(ContactsContext);


    return (
        <EditStyles>
             <div className="EditContainer">
                                        <button
                                            onClick={close}
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
                                        <label>Novo G??nero</label>
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
                                    onClick={edit}
                                        className="updateContact"
                                    >Atualizar Contato</button>
             </div>
    </EditStyles>
    )
}

export default Edit;