import React, { memo } from "react";
import FavoriteSpeakerToggleLine from "./FavoriteSpeakerToggleLine";

const SpeakerLine = ({
  speakerRec,
  toggleFavoriteSpeaker,
  updating,
  highlight,
}) => {
  return (
    <div className="col-xl-12 col-md-12">
      <div className="card border-0 speaker-list">
        <div className="card-body p-0">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              {speakerRec?.imageUrl ? (
                <img
                  src={speakerRec.imageUrl}
                  width={80}
                  alt={`${speakerRec?.firstName} ${speakerRec?.lastName}`}
                />
              ) : (
                // To make the background work I have replaced it with div
                <div className="blue-box-background" />
              )}
            </div>
            <div className="flex-grow-1 ms-3 me-5">
              <div className="list-group">
                <div className="d-flex w-100 justify-content-between">
                  <h5
                    className={
                      highlight === true
                        ? "mb-1 background-text-highlight"
                        : "mb-1"
                    }
                  >
                    {speakerRec.firstName} {speakerRec.lastName}
                  </h5>
                  <div className="spinner-bottom">
                    <FavoriteSpeakerToggleLine
                      speakerRec={speakerRec}
                      toggleFavoriteSpeaker={toggleFavoriteSpeaker}
                    >
                      {updating ? (
                        <i className="spinner-border text-dark" role="status" />
                      ) : null}
                    </FavoriteSpeakerToggleLine>
                  </div>
                </div>
                <small className="text-muted">
                  <strong>Company: </strong> {speakerRec.company}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//export default SpeakerLine;

// takes advantage of every time there is a change, the updating spinner shows. that will also cause favorite icon to re-render
export default memo(SpeakerLine, (prevProps, nextProps) => {
  return (
    prevProps.updating === nextProps.updating &&
    prevProps.highlight === nextProps.highlight
  );
});
