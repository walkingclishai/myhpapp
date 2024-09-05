const House = ({ image, banner, founder, colors, animal, head }) => {
  return (
    <>
      <div className="house-card">
        <img className="banner" src={banner} />
        <div className="inner-card">
          <img className="image" src={image} />
          <table>
            <tbody>
              <tr>
                <td>Founder:</td>
                <td>{founder}</td>
              </tr>
              <tr>
                <td>Colors:</td>
                <td>{colors}</td>
              </tr>
              <tr>
                <td>Animal:</td>
                <td>{animal}</td>
              </tr>
              <tr>
                <td>Head:</td>
                <td>{head}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default House;
