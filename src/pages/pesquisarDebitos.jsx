export default async function getStaticProps() {
  console.log('[Server] gerando props para o componente')
  const data = { "ccp": 449052};
  const resp = await fetch('https://desenvolvimento.prodataweb.inf.br:8008/sigAparecida/rest/servicoContribuinteController/pesquisarDebitos',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }
  
  )
  const users = await resp.json()

  console.log(users)
  

  // return {

  //   props: {
  //     users
  //   }
  // }
}