"use client";

import { Table } from "@/components/Table";
import { Modal } from "@/components/Modal";
import { Toolbar } from "@/components/Toolbar";
import { useState } from "react";

export default function Home() {

  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [toolbarOpen, setToolbarOpen] = useState(false);


  function deleteRow() {
    let newArr = []
    for (let i = 0; i < projects.length; i++) {
      if (i !== index) {
        newArr.push(projects[i]);
      }
    }
    setProjects(newArr);
    setToolbarOpen(false);
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
      </section>
      <section className="main-content">
        <div>
          <Table projects={ projects } setToolbarOpen={ setToolbarOpen } setIndex={ setIndex } />
          <button className="btn" type="submit" onClick={() => setModalOpen(true)}>+ Add Project</button>
        </div>
        { modalOpen && <Modal projects={ projects } setProjects={ setProjects }/> }
        { toolbarOpen && <Toolbar deleteRow={ deleteRow } /> }
      </section>
      </div>
    </div>
  );
}
