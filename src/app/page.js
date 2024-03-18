"use client";

import { Table } from "@/components/Table";
import { Modal } from "@/components/Modal";
import { Toolbar } from "@/components/Toolbar";
import { useState } from "react";

export default function Home() {

  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [toolbarOpen, setToolbarOpen] = useState(false);

  function deleteRow() {
    let newArr = [];

    for (let i = 0; i < projects.length; i++) {
      if (!(index.includes(i))) {
        newArr.push(projects[i])
      }
    }
    setProjects(newArr);
    setToolbarOpen(false);
    setIndex([]);
  }

  function toolbarToggle(e, idx) {
    if (e.checked) {
        setToolbarOpen(true);
        setIndex([...index, idx]);
    } else {
      setToolbarOpen(false);
      setIndex([]);
    }
  }

  return (
    <div className="main-container"
    // Close modal if clicked outside of it
      onClick={(e) => {
        if (e.target.className === "modal-container" && modalOpen !== false) setModalOpen(false);
      }
  }
    >
      <header className="header">Taskify - Do What You Gotta Do</header>
      <div className="sub-container">
      <section className="side-bar-left">
        <p>Home</p>
        <p className="instructions">Instructions: 
        <br /><br /> Double click on the cell you want to edit & double click to save
        <br /><br /> This project is not finished yet, but it is functional. This was to practice mainly React, 
        and I feel like I came to a good understanding.
        <br /> This taught me a lot, so I'm up to my next challenge!
        <br /><br /> See you there!
        </p>
      </section>
      <section className="main-content">
        <div className="table-container">
          <Table projects={ projects } toolbarToggle={toolbarToggle} />
          <button className="btn" type="submit" onClick={() => setModalOpen(true)}>+ Add Project</button>
        </div>
        { modalOpen && <Modal projects={ projects } setProjects={ setProjects } /> }
        { toolbarOpen && <Toolbar deleteRow={ deleteRow } /> }
      </section>
      </div>
    </div>
  );
}
