const style = {
  FooterContainer: 'w-full h-16 flex items-center justify-center bg-[#191a1e] ',
  Footertext: 'text-center',
};

const Footer = () => {
  return (
    <div className={style.FooterContainer}>
      <h2 className={style.Footertext}>® Résumily all rights reserved</h2>
    </div>
  );
};

export default Footer;
