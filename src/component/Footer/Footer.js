import "../Footer/Footer.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h3>Already Have an HBO Max Account?</h3>
        <button id="sign-up">Sign Up Now</button>
        <div className="social-links">
          <i className="fa fa-facebook-f"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
};
