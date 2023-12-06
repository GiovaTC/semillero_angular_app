type  InfoAccount = {
      publicaciones: number,
      seguidores: number,
      seguidos: string,
}

type HighLights = {
        title: string,
        content: string,
    }

type Posts = {
    title: string,
    content: string,
    author: string,
}


export type PersonalInformationType = {
    username : string,
    infoaccount : InfoAccount,

    highlights: Array<HighLights>,
    posts: Array<Posts>,
    
    threads: {
      username: string,
      privado: boolean,
    }
}

