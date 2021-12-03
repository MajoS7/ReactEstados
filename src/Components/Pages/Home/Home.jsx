import {Count} from '../../Layouts/Count/Count'
import { ChangeText } from '../../Layouts/ChangeText/ChangeText';
import './Home.css';

export const Home = ()=>{
    return(
        <main className="OrganizeL">
            <Count />
            <ChangeText />
        </main>
        
        
    );
}