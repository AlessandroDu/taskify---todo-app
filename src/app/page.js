"use client";

import { Table } from "@/components/Table";
import { useState } from "react";

export default function Home() {

  return (
    <div className="main-container">
      <header className="header">Taskify - Do What You Gotta Do</header>
      <div className="sub-container">
      <section className="side-bar-left">
        <p>Home</p>
      </section>
      <section className="main-content">
        <Table />
      </section>
      </div>
    </div>
  );
}
