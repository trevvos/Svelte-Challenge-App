<script lang="ts">


    interface FormData {
      name: string;
      phone: string;
      email: string;
    }
  
    let formData: FormData = {
        name: "",
        phone: "",
        email: ""
    };
  
    if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('formData');
      formData = storedData ? JSON.parse(storedData) : {};
    }
  </script>
  
  <section class="details">
    <div class="details__wrapper wrap">
      <h1>Detalhes do Candidato</h1>
      <span>Nome</span> {formData.name}
      <span>Telefone</span> {formData.phone}
      <span>E-mail</span> {formData.email}
    </div>
  </section>

<style>
  .details__wrapper {
    display: flex;
    flex-direction: column;
  }
  h1{
    font-size: 2rem;
    margin-bottom: 20px;
  }
  span {
    color: var(--brown);
    margin-top: 20px;
  }
</style>

  
