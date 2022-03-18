import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CardBody,
  Card,
  CardImg,
  CardText,
  CardSubtitle,
  CardTitle,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const Character = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState();

  const [descriptionModal, setDescriptionModal] = useState(false);

  const toggleDescription = () => setDescriptionModal(!descriptionModal);

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((err) => console.log("Error getting Pokemon's Data", err));
  }, [pokemon.url]);

  if (!pokemonData)
    return (
      <Card>
        <h2 style={{ marginTop: "50%" }}>
          Loading <Spinner color="dark" />
        </h2>
      </Card>
    );

  return (
    <Card className={pokemonData.types[0].type.name}>
      <CardTitle className={pokemonData.types[0].type.name}>
        <span className={pokemonData.types[0].type.name}>{pokemonData.id}</span>
      </CardTitle>

      <CardBody>
        <figure>
          <CardImg
            top
            width="100%"
            height="150"
            src={pokemonData.sprites.front_default}
            alt={`No Image Available`}
          />
        </figure>
        <CardSubtitle>
          <h3>
            {pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}
          </h3>
        </CardSubtitle>
        <div className="info">
          <CardText key="description">
            <button
              className={pokemonData.types[0].type.name}
              onClick={toggleDescription}
            >
              More
            </button>
            <Modal
              centered
              size="xl"
              isOpen={descriptionModal}
              toggle={toggleDescription}
              className="popup"
            >
              <ModalHeader
                className={pokemonData.types[0].type.name}
                toggle={toggleDescription}
              >
                <span>#{pokemonData.id} </span>
                <strong>
                  {pokemonData.name[0].toUpperCase() +
                    pokemonData.name.slice(1)}
                </strong>
              </ModalHeader>
              <ModalBody>
                <main>
                  <figure>
                    <CardImg
                      src={pokemonData.sprites.front_default}
                      alt={`No Image Available`}
                    />
                  </figure>

                  <section>
                    <article>
                      <h4>Stats:</h4>
                      <ul>
                        {pokemonData.stats.map((obj, index) => (
                          <li key={index}>
                            <strong>{`${obj.stat.name[0].toUpperCase()}${obj.stat.name.slice(
                              1
                            )}:`}</strong>{" "}
                            {` ${obj.base_stat} with ${obj.effort} effort`}
                          </li>
                        ))}
                      </ul>
                    </article>

                    <article className="card-types">
                      <h4>Types:</h4>
                      <p>
                        {pokemonData.types.map((obj, index) => (
                          <span
                            className={`${
                              obj.type.name[0]
                            }${obj.type.name.slice(1)}`}
                            key={index}
                          >
                            {`${obj.type.name[0].toUpperCase()}${obj.type.name.slice(
                              1
                            )}`}
                          </span>
                        ))}
                      </p>
                    </article>
                  </section>

                  <p className="Moves">
                    <h4>Moves:</h4>
                    {pokemonData.moves.map((obj, index) => (
                      <span
                        className={pokemonData.types[0].type.name}
                        key={index}
                      >{`${obj.move.name[0].toUpperCase()}${obj.move.name.slice(
                        1
                      )}`}</span>
                    ))}
                  </p>
                </main>
              </ModalBody>
            </Modal>
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
};

export default Character;
