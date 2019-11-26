import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArchiveIcon from '@material-ui/icons/Archive';
import HomeIcon from '@material-ui/icons/Home';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { isAdmin } from '../../UserView/userRole';

export const mainListItems = (cerrar, userRole) => ( <
    div onClick = {
        () => cerrar()
    } >
    <
    Link to = "/home" >
    <
    ListItem button >
    <
    ListItemIcon >
    <
    HomeIcon / >
    <
    /ListItemIcon> <
    ListItemText primary = "Home" / >
    <
    /ListItem> < /
    Link > <
    Link to = "/expediente" >
    <
    ListItem button >
    <
    ListItemIcon >
    <
    ArchiveIcon / >
    <
    /ListItemIcon> <
    ListItemText primary = "Expedientes" / >
    <
    /ListItem> < /
    Link > {
        isAdmin(userRole) &&
        ( <
            >
            <
            Link to = "/solicitudes" >
            <
            ListItem button >
            <
            ListItemIcon >
            <
            SearchIcon / >
            <
            /ListItemIcon> <
            ListItemText primary = "Buscador Solicitudes" / >
            <
            /ListItem> < /
            Link > <
            Link to = "/crear/expediente" >
            <
            ListItem button >
            <
            ListItemIcon >
            <
            AttachFileIcon / >
            <
            /ListItemIcon> <
            ListItemText primary = "Crear Expediente" / >
            <
            /ListItem> < /
            Link > <
            Link to = "/usuarios" >
            <
            ListItem button >
            <
            ListItemIcon >
            <
            AssignmentIndIcon / >
            <
            /ListItemIcon> <
            ListItemText primary = "Usuarios" / >
            <
            /ListItem> < /
            Link > <
            />
        )
    } <
    /div>
);