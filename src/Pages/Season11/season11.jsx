import { AppContainer } from "../../App";
import Ancoragem from "../../Components/Ancoragem/ancoragem";
import Header from "../../Components/Header/header";
import styled from "styled-components";
import foto from '../../images/fotoSeason.webp'
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import video from '../../videos/VideoCalendario.mp4'

const Gradient = styled.div`
    background-image: url(https://www.fiaformulae.com/resources/v4.22.11/i/elements/bg-article-theme-default.svg), linear-gradient(90deg, #00005a, #00f 49.48%, #0ff);
    background-size: 100%;
    height: 650px;
    width: 125px;
    display:flex;
    grid-template-columns: 
`


function Season11() {
    return (
        <AppContainer>
            <Header />
            <Ancoragem />
            <div className="divisor-horizontal"></div>
            <div className="mt-5 flex">
                <Gradient />
                <div className="flex flex-col text-left">
                    <div className=" pl-36 text-corTexto-100 font-bold flex flex-col gap-3">
                        <h1 className="text-[40px] leading-9">Formula E announces Season 11 calendar as Miami returns and two races in Monaco</h1>
                        <span className="flex items-center">Noticias
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="2" fill="#000000" /></svg>  11 JUN 2024  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="2" fill="#000000" /></svg>  3 MINUTOS
                        </span>
                        <p className="text-black font-light w-[660px]">Formula E has today announced its provisional calendar for Season 11 of the ABB FIA Formula E World Championship, with the largest number of races and locations set for a season, following validation of the FIA World Motorsport Council.</p>
                    </div>
                    <div className="flex relative w-auto mt-5 -ml-24">
                        <img src={foto} alt="Carros na pista" className="h-[600px] w-full" />
                    </div>
                    <div className="max-w-[1200px] flex flex-col text-left mt-10 gap-4 text-lg pl-24">
                        <p>Formula E will complete a 17-race season for the first time in its history spanning 11 iconic venues as it continues to pioneer all-electric racing. New race locations in Miami and Diriyah; a double-header of separate races in Monaco – a first for the Principality in any motorsport championship; a double-header of races in Tokyo; and the return of Jakarta complement the roster of other city venues.</p>
                        <p>The Season 11 campaign will begin in São Paulo on the 7 December 2024 following pre-season testing on 4-7 November 2024 in Valencia. It will be the first time the all-new GEN3 Evo race car will be put through its paces and tested in public, capable of 0-60mph in just 1.82 seconds - 36% faster than the current GEN3.</p>
                        <a href="" className="text-[#0000FF] underline">CALENDAR: Every race location set for Season 11</a>
                        <p>A new venue in Saudi Arabia will host the first double header of the season on 14-15 February 2025, while the series returns to Miami for the first time since Season 1 in an all-new location on 12 April 2025. The Homestead-Miami Speedway venue draws on its heritage and success in hosting thrilling NASCAR and IndyCar races for decades.</p>
                        <p>Monaco will, for the first time in the Principality’s history, host separate back-to-back motor races on the full Circuit de Monaco given the competitive and action-packed nature of Formula E races.</p>
                        <p>Following the hugely successful inaugural Tokyo E-Prix where public roads in the world’s most populous city were closed for an automotive event for the first time, a double header of races will take place on 17-18 May 2025.</p>
                        <p>Jakarta also returns to the calendar following a one-year hiatus, while a double-header finale in ExCeL London rounds out the largest Formula E race calendar to date.</p>
                        <p>One location has been included as TBC while final discussions with a new venue take place, ahead of the confirmed calendar announcement due in the autumn following the FIA's World Motor Sport Council Meeting.</p>
                        <video className="w-full h-auto max-w-full" controls muted>
                            <source src={video} type="video/mp4"/>
                        </video>
                        <p>Jeff Dodds, CEO, Formula E, said: "For Season 11 we’re taking electric racing to the next level and doing things never been done before in motorsport. Our world-leading GEN3 EVO will debut in front of hundreds of millions of fans around the globe, while adding two brand new locations and combinations of double-headers to grow our sport further.</p>
                        <blockquote>The new and improved calendar offers a perfect blend of circuits for drivers to push their upgraded cars to the limit, while staying true to our street racing DNA and the on-track action it produces.</blockquote>
                        <p>Alberto Longo, Co-Founder & Chief Championship Officer, Formula E, said: “We’re thrilled to offer a calendar with some fresh new highlights while building on our legacy locations. Returning to Miami gives us a home in one of the US’s most iconic and sports-mad cities, while securing a double-header in Monaco is a dream come true.</p>
                        <blockquote>We can’t wait to build on the success of Tokyo and deliver a double-header, while returning to Jakarta and entertaining our huge Indonesian fanbase too. With 17 races across the season and our most advanced race car debuting on track, we’re offering our fans cutting-edge sport we could only have hoped for when founding the championship just over 10 years ago.</blockquote>
                        <p>Marek Nawarecki, Director, FIA Circuit Sport Department, said: “The 2024/25 ABB FIA Formula E World Championship calendar features a range of circuits that will truly showcase the qualities of the brand new GEN3 EVO car, set to be introduced next season.</p>
                        <blockquote>I’m glad that Formula E capitalizes on the success of the Tokyo and Shanghai races whilst also returning to some of its iconic venues and retaining a good amount of street circuits, which is in its core DNA. I'm also hopeful that this new season will again play host to some fascinating action on track.</blockquote>
                    </div>
                </div>
            </div>
                <DentroNovidades/>
                <Footer/>
        </AppContainer>
    );
}

export default Season11;