
1. `mkdir MusicCollection`
2. `cd MusicCollection`
3. `mkdir Rock Pop HipHop`
4. `ls`
5. `cd Rock`
6. `touch ClassicRock.txt`
7. ```bash
   echo "Led Zeppelin" >> ClassicRock.txt
   echo "The Rolling Stones" >> ClassicRock.txt
   echo "Queen" >> ClassicRock.txt
   ```
8. `cat ClassicRock.txt`
9. `cd ..`
10. `touch Pop/Top40.txt`
11. ```bash
    echo "Taylor Swift" >> Pop/Top40.txt
    echo "Ed Sheeran" >> Pop/Top40.txt
    echo "Ariana Grande" >> Pop/Top40.txt
    ```
12. `cat Pop/Top40.txt`
13. `mv Rock/ClassicRock.txt Pop/`
14. `mv Pop/Top40.txt Pop/HitSongs.txt`
15. `mkdir HipHop/Featured`
16. `cd HipHop/Featured`
17. `touch BestRappers.txt`
18. ```bash
    echo "Kendrick Lamar" >> BestRappers.txt
    echo "Jay-Z" >> BestRappers.txt
    echo "Eminem" >> BestRappers.txt
    ```
19. `less BestRappers.txt`
20. `pwd > Location.txt`
