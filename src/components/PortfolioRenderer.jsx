// THIS IS NOT OKAY💀
const PortfolioRenderer = ({ htmlString }) => {
  return (
    <iframe id="demo"
      srcDoc={htmlString}
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
      }}
      sandbox=""
      title="Portfolio demo"
    />
  );
};

export default PortfolioRenderer;
