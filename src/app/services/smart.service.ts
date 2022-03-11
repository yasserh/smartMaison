export class SmartService{
    smarts=[
        {nom:'Télévision',etat:'on'},
        {nom:'Climatiseur',etat:'off'},
        {nom:'Portable',etat:'off'},
        {nom:'Tablette',etat:'off'},
        {nom:'Refrigirateur',etat:'on'},
        {nom:'Machine 1',etat:'on'},
        {nom:'Machine 2',etat:'off'},
        {nom:'Samsung',etat:'off'},
        {nom:'Nokia',etat:'on'},
        {nom:'Four',etat:'on'}
      ]


      basculeOnOne(index: number){
        this.smarts[index].etat ='on';
    }
     basculeOffOne(index: number){
        this.smarts[index].etat ='off';
    }

}