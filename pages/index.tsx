import Head from 'next/head'
import { useRef, useState } from 'react';
import { Button, CopyButton, HomeContainer, SorteioWrapper } from '../styles/HomeStyled'

import copy from "copy-to-clipboard"; 

import { BiCopy } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';

export default function Home() {

  const [icon, setIcon] = useState(<BiCopy />);

  const p1 = useRef<HTMLParagraphElement>(null);
  const p2 = useRef<HTMLParagraphElement>(null);  
  const p3 = useRef<HTMLParagraphElement>(null);
  const p4 = useRef<HTMLParagraphElement>(null);
  const p5 = useRef<HTMLParagraphElement>(null);
  const p6 = useRef<HTMLParagraphElement>(null);

  const Copy = useRef<HTMLDivElement>(null);

  const timerValue = 200;
  const REPEAT_COUNT = 8;

  const sleep = (ms? : number) => {
    return new Promise(resolve => setTimeout(resolve, ms || timerValue));
  }

  const CopyClick = async () => {
    let element = Copy.current;
    element?.classList.add('copied');
    setIcon(<AiOutlineCheck />)
    await sleep(2000);
    element?.classList.remove('copied');
    setIcon(<BiCopy />);
    copy(ConcatP());
  }

  const SortNumbers = async (e : any) => {
    e.preventDefault();
    await ChangeNumbers(p1.current != null ? p1.current : undefined);
    await ChangeNumbers(p2.current != null ? p2.current : undefined);
    await ChangeNumbers(p3.current != null ? p3.current : undefined);
    await ChangeNumbers(p4.current != null ? p4.current : undefined);
    await ChangeNumbers(p5.current != null ? p5.current : undefined);
    await ChangeNumbers(p6.current != null ? p6.current : undefined);
  }

  const ConcatP = () : string => {
    let finalStr = '';
    if (p1.current != null) {
      finalStr += p1.current.innerHTML;
    }
    if (p2.current != null) {
      finalStr += p2.current.innerHTML;
    }
    if (p3.current != null) {
      finalStr += p3.current.innerHTML;
    }
    if (p4.current != null) {
      finalStr += p4.current.innerHTML;
    }
    if (p5.current != null) {
      finalStr += p5.current.innerHTML;
    }
    if (p6.current != null) {
      finalStr += p6.current.innerHTML;
    }
    return finalStr; // for some reason the ternary operator does not work here
  }

  const ChangeNumbers = async (element? : HTMLParagraphElement) => {
    if (element == null) {
      return;
    }
    element.style.animation = 'sort 0.2s ease';
    element.style.animationIterationCount = REPEAT_COUNT.toString();
    for(let i = 0; i < REPEAT_COUNT; i++) {
      await sleep();
      element.innerHTML = GenerateRandom().toString();
    }
    element.style.animation = '';
  }

  const GenerateRandom = () : number => {
    return Math.floor(Math.random() * 61);
  }

  return (
    <>
      <Head>
        <title>Sorteio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <h1>Sortear números para a mega sena</h1>
        <SorteioWrapper>
          <p ref={p1}>1</p>
          <p ref={p2}>2</p>
          <p ref={p3}>3</p>
          <p ref={p4}>4</p>
          <p ref={p5}>5</p>
          <p ref={p6}>6</p>
          <CopyButton ref={Copy} onClick={CopyClick}>
            {icon}
          </CopyButton>
        </SorteioWrapper>
        <Button href="#" onClick={(e) => SortNumbers(e)}>
          Sortear
        </Button>
      </HomeContainer>
    </>
  )
}
