import React from "react";
import * as C from './style'
import { useForm } from "react-hook-form"
import { useState } from 'react';
import Logo from '../../assets/logo.png'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import api from '../../services/api'
import { Alert } from '@mui/material';
import { useHistory } from "react-router-dom";

export function EditUserId() {
    const { location: {
        state: { user }
    } } = useHistory();
    const [alertMessage, setAlertMessage] = useState('');
    const {
        register,
        handleSubmit,
        control, // Adicionado o control para o Select do Material-UI
        setValue, // Adicionado setValue do react-hook-form
    } = useForm();
    const handleNameChange = (event) => {
        const selectedName = event.target.value;
        setValue("name", selectedName); // Atualiza o valor do campo "name" com o nome selecionado
    }
    const { push } = useHistory();
    const EditUser = async (data) => {

        await api.put(`users/${user.id}`, {
            name: data.name,
            date: data.date,
            card: data.card,
            value: data.currency,
            location: data.location
        })
        setAlertMessage('Alterado com sucesso!')

        setTimeout(() => {
            setAlertMessage('');
            push('users')
        }, 2000);


    }
    return (
        <C.Main>
            <C.Container>
                {alertMessage && <Alert style={{
                    width: 200,
                    zIndex: 9999, // Define a ordem de empilhamento (quanto maior, mais acima na pilha)
                }}
                    severity="success">{alertMessage}</Alert>}
                <C.Img src={Logo} />

                <C.H1>Registrar Compra</C.H1>
                <form onSubmit={handleSubmit(EditUser)}>
                    <InputLabel style={{ width: 200, color: "#82a" }} id="demo-simple-select-label" >Nome</InputLabel>
                    <Select
                        style={{ width: 200 }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Name"
                        {...register("name", { required: true })}
                        control={control}
                        onChange={handleNameChange} // Adiciona o evento onChange para capturar o valor selecionado
                        defaultValue={user.name}
                    >
                        <MenuItem value="Daniel">Daniel</MenuItem>
                        <MenuItem value="Francisco">Francisco</MenuItem>
                        <MenuItem value="Larissa">Larissa</MenuItem>
                        <MenuItem value="Rita">Rita</MenuItem>
                        <MenuItem value="Taís">Taís</MenuItem>
                        <MenuItem value="Tauã">Tauã</MenuItem>
                    </Select>


                    <C.Label style={{ marginRight: 160 }}>Data</C.Label>
                    <C.Input type="date" name="begin"
                        placeholder="dd-mm-yyyy"
                        min="1997-01-01" max="2030-12-31" {...register("date", { required: true })} defaultValue={user.date} />

                    <C.Label style={{ marginRight: 155 }} >Cartão</C.Label>
                    <C.Input type="card" {...register("card", { required: true })} defaultValue={user.card} />

                    <C.Label style={{ marginRight: 140 }} >Valor</C.Label>
                    <C.Input type="number" {...register("currency", { required: true })} defaultValue={user.value} />

                    <C.Label style={{ marginRight: 80 }}>Estabelecimento</C.Label>
                    <C.Input type="location" {...register("location", { required: true })} defaultValue={user.location}
                    />

                    <C.Button type="submit">Editar</C.Button>
                </form>
            </C.Container>
        </C.Main>
    )
}
