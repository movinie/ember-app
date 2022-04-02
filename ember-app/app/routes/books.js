import Route from '@ember/routing/route';

export default Route.extend({
     async model(){
        let response = await fetch("https://teststand.t-mobis.ru/Books");
        let parsed = await response.json();
        parsed = JSON.parse(parsed);
        return parsed;
    }
});
