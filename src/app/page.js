"use client";

import { Modal } from "@/components/Modal";
import { Table } from "@/components/Table";
import { useState } from "react";

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);

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
        <Table />
        <button type="submit" onClick={() => setModalOpen(true)}>+ Add Project</button>
        { modalOpen && <Modal /> }
      </section>
      </div>
    </div>
  );
}
