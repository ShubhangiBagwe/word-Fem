import React from "react";
import "./definitions.css";

const Definitions = ({ meanings, word, LightMode, category }) => {
    return (
        <div className="meaningsContainer">
            {/* audio---------------------------- */}
            {meanings[0] && word && category === "en" && (
                <audio
                    style={{ backgroundColor: "#fff", borderRadius: 10 }}
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    controls
                >
                    Your browser does not support the audio element.
                </audio>
            )}
            {/* audio---------------------------- */}

            <div className="meanings">
                {word === "" ? (
                    <span className="subTitle">Start by typing a word in search</span>
                ) : (
                    meanings.map((mean) =>
                        mean.meanings.map((item) =>
                            item.definitions.map((def) => (
                                <div
                                    className="singleMean"
                                    style={{
                                        backgroundColor: LightMode ? "#3b5360" : "white",
                                        color: LightMode ? "white" : "black",
                                    }}
                                >
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                                    {def.example && (
                                        <span>
                                            <b>Example :</b> {def.example}
                                        </span>
                                    )}
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}
                                </div>
                            ))
                        )
                    )
                )}
            </div>
        </div>
    );
};

export default Definitions;