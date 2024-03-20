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
  
  <h1>Detalhes do Candidato</h1>
  <a href="/">Home</a>
  <p>Nome: {formData.name}</p>
  <p>Telefone: {formData.phone}</p>
  <p>Email: {formData.email}</p>

  
