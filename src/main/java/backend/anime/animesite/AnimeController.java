package backend.anime.animesite;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/anime")
public class AnimeController {
    @Autowired
    private AnimeService animeService;
    @GetMapping
    public ResponseEntity<List<Anime>> getAllAnime(){
      return new ResponseEntity<List<Anime>>(animeService.allAnime(),HttpStatus.OK);
    }
    @GetMapping("/{dbi}")
    private ResponseEntity<Optional<Anime>> getSingleAnime(@PathVariable String dbi) {
        Optional<Anime> anime = animeService.singleAnime(dbi);
        if (anime.isPresent()) {
            return new ResponseEntity<>(anime, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }}