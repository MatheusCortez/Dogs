import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../../../Components/Formulario/Input/Input";
import Button from "../../../Components/Formulario/Button/Button";
import Error from '../../../Components/Helpers/Errors/error'

import useForm from "../../../../Hooks/useForm";
import useFetch from "../../../../Hooks/useFetch";
import { PHOTO_POST } from "../../../../API/api";
import { useNavigate } from "react-router-dom";
function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();

  const [img, setImg] = React.useState({});

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate()



  React.useEffect(()=>{

    if(data) navigate('/conta')

  },[navigate,data])
  function handleSubmit({ event }) {
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onClick={handleSubmit}>
        <Input label="Nome" type="text" nome="nome" {...nome} />
        <Input label="Peso" type="text" nome="peso" {...peso} />
        <Input label="Idade" type="text" nome="nome" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error}/>
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
}

export default UserPhotoPost;
