import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import React from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const onclick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className="border-bottom" onClick={onclick}>
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.img} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">
          {props.name} {props.last}
        </span>
        {isOpen ? <IconChevronUp /> : <IconChevronDown />}
        {/* UserCardDetail is hidden */}
      </div>
      {isOpen && <UserCardDetail {...props} />}
    </div>
  );
}
