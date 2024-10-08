import React from "react";

function NavItem({ label, href, hasDropdown }) {
  return (
    <div className="flex gap-1 py-2.5 bg-white">
      <a href={href} className="grow">
        {label}
      </a>
      {hasDropdown && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/baba23baef82bdcec6214d0826a4026081c370a05b574d408ca0a3c66fde0339?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13"
          alt=""
          className="object-contain shrink-0 self-start bg-blend-normal aspect-square w-[18px]"
        />
      )}
    </div>
  );
}

export default NavItem;
