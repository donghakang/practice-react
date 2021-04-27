export const Footer = () => {
  return (
    <p style={{marginTop: '20vh'}}>
      <span style={{ fontSize:'2rem', fontWeight: "bolder" }}>Context</span> is really good when we just print out the info, However, if I want to
      change something in the context, Everything that is using the context will{" "}
      <span style={{ fontWeight: "bolder" }}>re render</span>
    </p>
  );
};
