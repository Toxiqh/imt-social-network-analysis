import React, {useState} from 'react';
import '../styles/ActionForm.css'
import RequestBtn from "./RequestBtn";

type Props = {
  action: string;
}

const ActionForm = (props: Props) => {
  const [selectedRequest, setSelectedRequest] = useState<string>('requete1');
  const titleReq1: string = 'Liste et nombre de produits commandés par les cercles de followers d\'un individu random';
  const titleReq2: string = 'Nombre de fois qu\'un produit a été commandé par les cercles de followers d\'un individu random';
  const titleReq3: string = 'Nombre de personnes dans un cercle de followers ayant commandé un produit spécifique';

  function changeSelectedRequest(newRequest: string) {
    setSelectedRequest(newRequest);
  }

  if (props.action == 'insert') {
    return (
        <div className="insert-form">
          <h3>Insertion de données</h3>
          <div className="form-container">
            <div className="radio-btn-container">
              <input type="radio" id="insert-choice-1"
                     name="contact" value="user"/>
              <label htmlFor="insert-choice-1">Utilisateurs</label>
              <input type="radio" id="insert-choice-2"
                     name="contact" value="product"/>
              <label htmlFor="insert-choice-2">Produits</label>
            </div>
            <label htmlFor="insert-number">Nombre d'éléments à insérer : </label>
            <input id="insert-number" type="number" name="insert-number" placeholder="100"/>
          </div>
        </div>
    )
  } else if (props.action == 'select') {
    if (selectedRequest == 'requete1') {
      var form =
          <>
            <h3>Requête 1</h3>
            <p>{titleReq1}</p>
            <div className="form-container">
              <label htmlFor="insert-number">Niveau de profondeur souhaité : </label>
              <input id="input-profondeur" type="number" name="profondeur" placeholder="3"/>
            </div>
          </>;
    } else if (selectedRequest == 'requete2') {
      var form =
          <>
            <h3>Requête 2</h3>
            <p>{titleReq2}</p>
            <div className="form-container">
              <div>
                <label htmlFor="insert-number">Niveau de profondeur souhaité : </label>
                <input id="input-profondeur" type="number" name="profondeur" placeholder="3"/>
              </div>
              <br/>
              <div>
                <label htmlFor="insert-number">Produit ciblé : </label>
                <input type="text" id="product" name="product" required placeholder="Chaise"/>
              </div>
            </div>
          </>;
    } else if (selectedRequest == 'requete3') {
      var form =
          <>
            <h3>Requête 3</h3>
            <p>{titleReq3}</p>
            <div className="form-container">
              <div>
                <label htmlFor="insert-number">Niveau de profondeur souhaité : </label>
                <input id="input-profondeur" type="number" name="profondeur" placeholder="3"/>
              </div>
              <br/>
              <div>
                <label htmlFor="insert-number">Produit ciblé : </label>
                <input type="text" id="product" name="product" required placeholder="Chaise"/>
              </div>
            </div>
          </>;

    } else {
      var form = <h3>error</h3>;
    }

    return (
        <div className="insert-form">
          <h3>Récupération de données</h3>
          <div className="Actions-Btn-Container">
            <div className="Action-Btn">
              <RequestBtn title={titleReq1} click={changeSelectedRequest} requestLabel={'requete1'} btnLabel={'Requête 1'}/>
            </div>
            <div className="Action-Btn">
              <RequestBtn title={titleReq2} click={changeSelectedRequest} requestLabel={'requete2'} btnLabel={'Requête 2'}/>
            </div>
            <div className="Action-Btn">
              <RequestBtn title={titleReq3} click={changeSelectedRequest} requestLabel={'requete3'} btnLabel={'Requête 3'}/>
            </div>
          </div>
          {form}
        </div>
    )
  } else {
    return (
        <div></div>
    )
  }
};

export default ActionForm;