import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable()
export class Services{
    private currentWordSet = new BehaviorSubject<string>('default_val')
    currentWord = this.currentWordSet.asObservable();
    private currentSynListSet = new BehaviorSubject<Object>([])
    currentSynList = this.currentWordSet.asObservable();
    private validword = new BehaviorSubject<number>(0)
    currentValidWord = this.validword.asObservable();
    getSynonyms(word){

    return fetch("https://wordsapiv1.p.rapidapi.com/words/"+word+"/synonyms", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "2a9dbd41b8msh9e0bb1001df4938p1bba82jsne75a05277394"
	    }
        })

    }
    getDef(word){

        return fetch("https://wordsapiv1.p.rapidapi.com/words/"+word+"/definitions", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "2a9dbd41b8msh9e0bb1001df4938p1bba82jsne75a05277394"
            }
            })
    
        }
    setWord(word : string){
        this.currentWordSet.next(word)
    }
    setList(list : any){
        this.currentSynListSet.next(list)
    }
    toggleValid(num){
        this.validword.next(num)
    }

}