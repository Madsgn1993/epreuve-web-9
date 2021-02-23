//import { menus } from "./TabMenu";
//import MenuDuJour from "./MenuDujour"

const Main = () => {

 
  function getMenu(){


    alert(
      
      
      "Entrées : Endive, salade croquante et vinaigrette à l'orange ou potage de courge ( selon marché ). Plats : Falafel Burger: Bun's au sarrasin, galette de pois-chiche frite, coleslaw, sauce tahini , accompagné de pommes de terre sautées ou Burger Salvi: Bun's au sarrasin, épaule de cochon confite au cidre, sauce BBC maison, champignons, accompagné de pommes de terre sautées. Desserts : Cookie au chocolat ou Salade de fruit"
  
    
    )


  }

  return (
    <div id="content_main">
      <div id="content_unstensil">
        <img src="./data/cuisine.png" alt="ustensilCuisine"/>        
      </div>
      <div id="content_leftRigth">
        <div id="left">
          <img src="../data/curry_de_legume.jpg" alt="photo_plat" />
          <div id="p_presentation">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt commodo mauris, et euismod justo interdum eu. Nullam
              quis mollis diam. Aliquam vitae vulputate purus. Praesent luctus
              felis odio, quis aliquet mauris dignissim vitae. Vestibulum cursus
              sem eu urna pretium, eget accumsan leo maximus. Maecenas nec
              auctor orci, eget dictum ante. Integer hendrerit, enim ac rutrum
              blandit, dolor libero tincidunt ipsum, a varius ipsum purus ut
              urna. Sed porta molestie purus, non lacinia nunc feugiat vitae.
            </p>
            <button onClick={getMenu}>MENU DU JOUR</button>
            <div id="content_menuDuJour"></div>
          </div>
        </div>
        <div id="rigth">
          <img src="../data/cuistot1.jpg" alt="cuisinier_Heureux" />
        </div>
      </div>
    </div>
  );
};

export default Main;
