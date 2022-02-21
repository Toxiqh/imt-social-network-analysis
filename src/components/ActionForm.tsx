import React from 'react';
import '../styles/ActionForm.css'

type Props = {
  action: string;
}

const ActionForm = (props: Props) => {

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
    return (
        <div className="insert-form">
          <h3>Récupération de données</h3>
          <div className="form-container">
            <div className="radio-btn-container">
              <input type="radio" id="select-choice-1"
                     name="contact" value="user"/>
              <label htmlFor="select-choice-1">Liste et nombre de produits commandés par les followers d'un utilisateur random</label>
            </div>
            <label htmlFor="insert-number">Nombre d'éléments à insérer : </label>
            <input id="insert-number" type="number" name="insert-number" placeholder="100"/>
          </div>
        </div>
    )
  } else {
    return (
        <div></div>
    )
  }

};

export default ActionForm;