export const Footer = () => {
  return (
    <div className="w-full h-[280px] py-10 justify-center items-start gap-12 flex-shrink-0 bg-[var(--Indigo-700,#4338CA)]">
      <div className="flex items-start gap-10 items-stretch0">
        <div>
          <div className="flex">
            <img src="film.svg" alt="" />
            <p>movie z</p>
          </div>
          <div>
            <p>© 2024 Movie Z. All Rights Reserved.</p>
          </div>
        </div>
        <div>
          <p>Contact Information</p>
          <p>Email support@movieZ.com</p>
          <p>Phone +976 (11) 123-4567</p>
        </div>
        <div>
          <p>Follow us</p>
          <p>Facebook Instagram Twitter YouTube</p>
        </div>
      </div>
    </div>
  );
};
