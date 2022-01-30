import React from 'react';

const CityFilter = (props) => {
    return(
    <div>
        <select className='cityFilter filter' 
            onChange={props.changeHandler} id="cities" name="cities">
            <option selected value="City">--City--</option>
            <option value="Skopje">Skopje</option>
            <option value="Tetovo">Tetovo</option>
            <option value="Bitola">Bitola</option>
            <option value="Kumanovo">Kumanovo</option>
            <option value="Prilep">Prilep</option>
            <option value="Ohrid">Ohrid</option>
            <option value="Strumica">Strumica</option>
            <option value="Veles">Veles</option>
            <option value="Štip">Štip</option>
            <option value="Kavadarci">Kavadarci</option>
            <option value="Gostivar">Gostivar</option>
            <option value="Kočani">Kočani</option>
            <option value="Kičevo">Kičevo</option>
            <option value="Struga">Struga</option>
            <option value="Radoviš">Radoviš</option>
            <option value="Gevgelija">Gevgelija</option>
            <option value="Debar">Debar</option>
            <option value="Kriva Palanka">Kriva Palanka</option>
            <option value="Sveti Nikole">Sveti Nikole</option>
            <option value="Negotino">Negotino</option>
            <option value="Delčevo">Delčevo</option>
            <option value="Vinica">Vinica</option>
            <option value="Probištip">Probištip</option>
            <option value="Aračinovo">Aračinovo</option>
            <option value="Berovo">Berovo</option>
            <option value="Kratovo">Kratovo</option>
            <option value="Bogovinje">Bogovinje</option>
            <option value="Bogdanci">Bogdanci</option>
            <option value="Studeničani">Studeničani</option>
            <option value="Sopište">Sopište</option>
            <option value="Kruševo">Kruševo</option>
            <option value="Vrapčište">Vrapčište</option>
            <option value="Valandovo">Valandovo</option>
            <option value="Želino">Želino</option>
            <option value="Tearce">Tearce</option>
            <option value="Makedonski Brod">Makedonski Brod</option>
            <option value="Demir Kapija">Demir Kapija</option>
            <option value="Pehčevo">Pehčevo</option>
            <option value="Brvenica">Brvenica</option>
            <option value="Novo Selo">Novo Selo</option>
            <option value="Vevčani">Vevčani</option>
            <option value="Petrovec">Petrovec</option>
            <option value="Lipkovo">Lipkovo</option>
            <option value="Demir Hisar">Demir Hisar</option>
            <option value="Rosoman">Rosoman</option>
            <option value="Plasnica">Plasnica</option>
            <option value="Mogila">Mogila</option>
            <option value="Krivogaštani">Krivogaštani</option>
            <option value="Zrnovci">Zrnovci</option>
            <option value="Gradsko">Gradsko</option>
            <option value="Vasilevo">Vasilevo</option>
            <option value="Bosilovo">Bosilovo</option>
            <option value="Staro Nagoričane">Staro Nagoričane</option>
            <option value="Rankovce">Rankovce</option>
            <option value="Novaci">Novaci</option>
            <option value="Konče">Konče</option>
            <option value="Obleševo">Obleševo</option>
            <option value="Belčišta">Belčišta</option>
            <option value="Jegunovce">Jegunovce</option>
            <option value="Lozovo">Lozovo</option>
            <option value="Dolneni">Dolneni</option>
            <option value="Rostuša">Rostuša</option>
            <option value="Centar Župa">Centar Župa</option>
            <option value="Zelenikovo">Zelenikovo</option>
            <option value="Čučer-Sandevo">Čučer-Sandevo</option>
            <option value="Karbinci">Karbinci</option>
            <option value="Star Dojran">Star Dojran</option>
            <option value="Ilinden">Ilinden</option>
            <option value="Makedonska Kamenica">Makedonska Kamenica</option>
            <option value="Resen">Resen</option>
        </select>
    </div>);
};

export default CityFilter;
