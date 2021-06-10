import { Modal } from '@material-ui/core';

function HintModal({
  popupHelpNo,
  popupHelpYes,
  showModal,
}) {

  return (
    <Modal
      open={showModal}
      onClose={() => { }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
    >
      <div style={{
        top: '50%',
        left: '50%', /* à 50%/50% du parent référent */
        transform: 'translate(-50%, -50%)', /* décalage de 50% de sa propre taille */
        position: 'absolute',
        width: 400,
        padding: '40px 10px',
        outline: 0,
        textAlign: 'center',
        backgroundColor: 'white',
        border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
      }}>
        <span>Veux tu un indice?</span>
        <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', marginTop: '10px' }}>
          <div style={{ flex: 1 }}>
            <div className="button_cont" align="center">
              <a onClick={popupHelpNo} className="example_b" >NO</a>
            </div>
          </div>
          <div style={{ flex: 1 }}>

            <div className="button_cont" align="center">
              <a onClick={popupHelpYes} className="example_b" >Oui</a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
};

export default HintModal;
