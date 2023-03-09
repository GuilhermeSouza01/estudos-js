import axios from "axios";

// Exer 1
// // Funcão delay aciona o .then após 1s
// const delay = () => new Promise((resolve) => setTimeout(resolve, 3000));

// async function umPorSegundo() {
//   await delay();
//   console.log("3s");
//   await delay();
//   console.log("6s");
//   await delay();
//   console.log("9s");
// }

// umPorSegundo();

// Exer 2
// async function getUserFromGithub(user) {

//     try{
//         const response = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(response);
//     }catch(err) {
//         console.log("Usuário não existe");
//     }

// }
// getUserFromGithub("guilhermesouza01");
// getUserFromGithub("diego3g124123");

// Exer 3
// class Github {
//   static async getRepositorieOwner(repo) {

//     try {
//         const response = await axios.get(`https://api.github.com/repos/${repo}`);

//         let data = response.data;
//         console.log(data.owner)
//     } catch (error) {
//         console.log("Repositório não existe");
//     }
//   }
// }
// Github.getRepositorieOwner("GuilhermeSouza01/nlw-explorer-esports");
// Github.getRepositorieOwner("rocketseat/dslkvmskv");

// const buscaUsuario = async(usuario) => {

//     try {
//         const response = await axios.get(`https://api.github.com/users/${usuario}`)
//         console.log(response.data);
//     } catch (error) {
//         console.log("Usuário não existe");
//     }

// };
// buscaUsuario("GuilhermeSouza01");

async function ShowJsonData() {

    try {
        const response = await axios('./json-tccfile.json')
        let colabs = response.data;
        
         for (let colab of colabs) {
            while(colab.index >= 0 && colab.index <= 5000) {
                console.log( colab.index, colab.name, colab.balance);
                break;
            }
        }

    } catch (error) {
        console.warn(error);
    }

}

const result = ShowJsonData();

console.log(`- ${result}-`);