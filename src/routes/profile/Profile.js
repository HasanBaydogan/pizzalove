import React, { useEffect, useState } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { useNavigate } from "react-router-dom";
import validateForm from "../../components/validateForm";

const Profile = ({ currentUser, handleLogout, updateUser }) => {
  const [editForm, setEditForm] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    fullname: "",
    address: "",
    number: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const navigate = useNavigate();
  const validate = validateForm("profile");
  const toggleForm = () => {
    setEditForm(!editForm);
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setFormErrors(validate(formValue));
    window.scrollTo(0, 0);
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    } else {
      const updatedFields = {};
      // Değiştirilip değiştirilmediğini belirlemek için her alanı kontrol edin
      for (const fieldName of Object.keys(formValue)) {
        if (
          formValue[fieldName] !== "" &&
          formValue[fieldName] !== currentUser[fieldName]
        ) {
          updatedFields[fieldName] = formValue[fieldName];
        } else {
          updatedFields[fieldName] = currentUser[fieldName]; // Orijinal değeri koruyun
        }
      }

      const update = await updateUser(currentUser.id, updatedFields);
      if (update) {
        setLoading(false);
        setEditForm(false);
        setFormValue({
          email: "",
          password: "",
          fullname: "",
          address: "",
          number: "",
        });
      }
    }
  };

  const confirmDeleteUser = () => {
    ResetLocation();
    setConfirmationModal(true);
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_USERS_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        navigate("/");
        handleLogout();
        return true;
      }
    } catch (err) {
      console.log(err.message);
      return false;
    }
  };

  useEffect(() => {
    document.title = "Profile | Pizza Time";
  }, []);
  return (
    <main className="profile">
      <h2>Profil bilgileri</h2>
      <p>Kişisel bilgiler ve başvuru</p>
      {loading ? (
        <div role="status" className="loader">
          <p>Neredeyse geldik.</p>
          <img
            alt="Processing request"
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </div>
      ) : editForm ? (
        <form className="profile-form" onSubmit={handleSubmit}>
          <hr />
          <section className="profile-information-section">
            <label htmlFor="email">E-posta</label>
            <input
              name="email"
              type="text"
              value={formValue.email}
              placeholder={currentUser.email}
              onChange={handleValidation}
            />
          </section>
          <span className="input-validation-error">{formErrors.email}</span>
          <hr />
          <section className="profile-information-section">
            <label htmlFor="password">Şifre</label>
            <input
              name="password"
              type="password"
              value={formValue.password}
              placeholder="********"
              onChange={handleValidation}
            />
          </section>
          <span className="input-validation-error">{formErrors.password}</span>
          <hr />
          <section className="profile-information-section">
            <label htmlFor="fullname">İsim Soyisim</label>
            <input
              name="fullname"
              type="text"
              value={formValue.fullname}
              placeholder={currentUser.fullname}
              onChange={handleValidation}
            />
          </section>
          <span className="input-validation-error">{formErrors.fullname}</span>
          <hr />
          <section className="profile-information-section">
            <label htmlFor="address">Adres</label>
            <input
              name="address"
              type="text"
              value={formValue.address}
              placeholder={
                currentUser.address !== null
                  ? currentUser.address
                  : "Add address..."
              }
              onChange={handleValidation}
            />
          </section>
          <span className="input-validation-error">{formErrors.address}</span>
          <hr />
          <section className="profile-information-section">
            <label htmlFor="number">Telefon Numarası</label>
            <input
              name="number"
              type="text"
              value={formValue.number}
              placeholder={
                currentUser.number !== null
                  ? currentUser.number
                  : "Add number..."
              }
              onChange={handleValidation}
            />
          </section>
          <span className="input-validation-error">{formErrors.number}</span>
          <hr />
          <section className="profile-buttons">
            <button
              type="button"
              className="active-button-style"
              onClick={() => {
                toggleForm();
                ResetLocation();
              }}
            >
              Cancel edit
            </button>
            <button className="passive-button-style">Profili Kaydet</button>
          </section>
        </form>
      ) : (
        <React.Fragment>
          <article className="profile-information">
            <hr />
            <section className="profile-information-section">
              <h3>E-posta</h3>
              <p>{currentUser.email}</p>
            </section>
            <hr />
            <section className="profile-information-section">
              <h3>Şifre</h3>
              <p>*********</p>
            </section>
            <hr />
            <section className="profile-information-section">
              <h3>İsim Soyisim</h3>
              <p>{currentUser.fullname}</p>
            </section>
            <hr />
            <section className="profile-information-section">
              <h3>Adres</h3>
              {currentUser.address !== null ? (
                <p>{currentUser.address}</p>
              ) : (
                <p>N/A</p>
              )}
            </section>
            <hr />
            <section className="profile-information-section">
              <h3>Telefon Numarası</h3>
              {currentUser.number !== null ? (
                <p>{currentUser.number}</p>
              ) : (
                <p>N/A</p>
              )}
            </section>
            <hr />
          </article>
          <section className="profile-buttons">
            <button
              type="button"
              className="active-button-style"
              onClick={() => {
                toggleForm();
                ResetLocation();
              }}
            >
              Hesabı Düzenle
            </button>
            <button
              type="button"
              className="passive-button-style"
              onClick={() => confirmDeleteUser()}
            >
              Hesabı Sil
            </button>
          </section>
        </React.Fragment>
      )}
      {confirmationModal ? (
        <section className="deletion-modal">
          <section className="deletion-window">
            <h3>Hesabı Sil</h3>
            <p>
              Hesabınızı silmek istediğinizden emin misiniz? Bu işlem geri
              alınamaz ve tüm veriler kaybolacak
            </p>
            <section>
              <button
                type="button"
                className="confirm-deletion"
                onClick={() => deleteUser(currentUser.id)}
              >
                Onayla
              </button>
              <button
                type="button"
                className="cancel-deletion"
                onClick={() => {
                  setConfirmationModal(false);
                  ResetLocation();
                }}
              >
                İptal Et
              </button>
            </section>
          </section>
        </section>
      ) : null}
    </main>
  );
};

export default Profile;
