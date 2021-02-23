const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div id="info_footer">
          <h2>Arichive</h2>
          <h2>Gustative</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt commodo mauris, et euismod justo interdum eu. Nullam quis
            mollis diam. Aliquam vitae vulputate purus. Praesent luctus felis
            odio, quis aliquet mauris dignissim vitae. Vestibulum cursus sem eu
            urna pretium, eget accumsan leo maximus. Maecenas nec
          </p>
          <button type="submit">Voter</button>
        </div>
        <div id="illu_footer">
          <div id="orange">
            <img src="../data/splash.svg" alt="image_Splash" id="splash_svg" />
          </div>
          <div id="img_footer">
            <img src="../data/suri02.jpg" alt="logo_suri" id="suri_footer" />
          </div>
        </div>
      </div>
      <div id="carrousel">
        <img src="../data/1.jpg" alt="plat" />
        <img src="../data/2.jpg" alt="plat" />
        <img src="../data/3.jpg" alt="plat" />
      </div>
    </div>
  );
};

export default Footer;
