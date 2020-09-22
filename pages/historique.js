import React from 'react';
import styled from "styled-components"

const Titre = styled.h1`
position: relative;
top: 5rem;
left: 5rem;
font-size: 8rm;

`
const Text = styled.p`
    position: relative;
    width: 80%;
    align-content: center; 
    top: 6rem;
    left: 10rem;
    right: 10rem;
    margin-right:10rem;

    img{
        float: left;
        margin: 2rem;
    }
`
export default function disques () {

    return(
        <>
        <Titre>Notre Histoire</Titre>
        <Text>Neuf de ses membres sont issus de L'Enfant Fort (1974), libre regroupement qui, le samedi après midi, paradait dans les rues de Montréal avec tambours et trompettes, de la Pouet Pouet Band (1978), un orchestre qui intégrait à ses musiques originales le théâtre et la chanson, « […] d'où se dégage un goût de café noir qui fouette le système nerveux central. » Jean-Robert Sansfaçons, Le Temps Fou  et de Montréal Transport Limité (1981), troupe de cabaret underground.
        <br></br>    
        <br></br>    
Puis, comme le dit la chanson, tout le monde est reparti dans le tourbillon de la vie…En 1995, le désir de jouer à nouveau ensemble surgit de plus belle et certains d'entre eux créent la fanfare Pourpour. Au fil des ans, des jeunes musiciens et des grands noms de la scène du jazz d'avant- garde montréalaise se joignent à l'orchestre.
<br/>
<br/>
<img src="enfant-fort-circa-1976.jpg"></img>
{/* <h2>Aujourd'hui</h2> */}
Aujourd'hui, ils sont dix neuf musiciens et musiciennes à jouer une musique rythmée aux sonorités colorées de lyrisme, de romantisme et de tendresse. En témoignent ses cinq albums parus sur son étiquette indépendante "monsieur fauteux m'entendez-vous?" ainsi que ses nombreux spectacles donnés au Québec et à l'étranger (France, Suède, Mexique, Irlande).
<br/>
<br/>
De 2010 à 2015, la fanfare Pourpour a offert deux activités populaires dans le quartier Centre-Sud de Montréal : au mois d'août, le Cabaret sous les arbres au Parc des Faubourgs, en collaboration avec Soeurs Schmutt et Toxique Trottoir, un rendez-vous festif en plein air, pour petits et grands, rassemblant une trentaine de musiciens, danseurs, conteurs, circassiens; et en septembre le Bal de l'Avenir, des ateliers de créations musicale et littéraire proposés à des enfants de l'école Champlain qui se concluaient par un enregistrement de disque, un spectacle à la maison de la culture Frontenac et une grande parade impliquant plusieurs écoles du quartier.
<br/>
<br/>
Enregistrements
Le 26 avril 1999, pourpour le plaisir (et la postérité?), la fanfare Pourpour lance son premier disque Tout le monde. Direction musicale et arrangements  Bernard Poirier, compositions en majorité signées Luc Proulx et Bernard Poirier.
<br/>
<br/>
Le 22 mars 2004, la fanfare Pourpour lance son deuxième disque Le Bal, enregistré en novembre 2003. Direction musicale de Jean Derome, compositions et arrangements signés par les musiciens de la fanfare Pourpour.
Ces deux disques offrent des musiques lyriques et cinématographiques.
<br/>
<br/>
Le 20 mars 2007, la fanfare Pourpour lance son 3e album Karusell Musik. 17 pièces de et avec l'accordéoniste suédois Lars Hollmer. Compositions et arrangements Lars Hollmer. Direction musicale et orchestration pour la fanfare, Jean Derome.
<br/>
<br/>

Le 21 mai 2010, la fanfare Pourpour lance son 4e opus Danse des breloques. Coréalisé par Jean Derome et Nemo Venba, il propose des compositions de divers membres de la Pourpour.
Le 22 septembre 2015, la fanfare Pourpour lance son 5e cd, La Pourpour. Réalisation de Guido Del Fabbro. 14 compositions écrites et arrangées par 11 musiciens de la fanfare.
<br/>
<br/>
Filmographie
Confidences d'une Fanfare de Richard Lavoie. Vidéo, 53 min., 2000, Québec.
Sélection officielle du Festival international de films francophones de Namur (Belgique 2000).
7e Art/distribution inc., Daniel Bouchard
Ce documentaire dresse un portrait touchant de la fanfare.
«Confidences d'une Fanfare reste un film rare. Il saisit des moments de liberté et d'expression de quelques artistes guidés par le plaisir de la musique et de la complicité. Pour une fois que des créateurs se confient à d'autres qu'à leur gérant ! » Pierre Demers, Journal L'Itinéraire.</Text>
        </>
    )

    
}