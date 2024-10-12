import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface MainLinkProps {
  text: string;
  href: string;
}

export default function MainLink(props: MainLinkProps) {
  return (
    <Link className='menu-link' to={props.href ?? '/'}>
      {props.text}
    </Link>
  );
}
