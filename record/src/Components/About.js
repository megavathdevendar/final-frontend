import React from 'react'

const About = () => {
  const myStyle = {
    backgroundImage:
      "url('./about.webp')",
    height: '110vh',
    backgroundSize: 'cover',
  };
  return (
    <div style={myStyle} className="about">
      <centre>
        <h1>
          Delta Bank <br></br>
          <br />
          <p>Delta National Bank and Trust Company is a nationally chartered bank,
            based in New York that has provided Private Banking services to South
            American investors for more than three decades. The Bank offers an open
            platform to allow clients to access dynamic financial services instruments
            developed worldwide</p>
        </h1>
      </centre>


    </div>
  )
}

export default About