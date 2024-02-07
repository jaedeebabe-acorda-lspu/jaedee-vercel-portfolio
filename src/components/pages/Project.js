import React from 'react'
import Navbar from "../Navbar"
import styled from 'styled-components';
import ProjectPage from '../ProjectPage';
import ProjectDetails from '../ProjectDetails';
import Footer from '../Footer';
import { useState } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function Project (){
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    console.log(openModal)
    return (
        <>
        <Navbar/>  
        <Body>
            <ProjectPage openModal={openModal} setOpenModal={setOpenModal} />
            {openModal.state &&
                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
            <Footer />
        </Body>
        </>
    )
}

export default Project
