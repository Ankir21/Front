package backend.anime.animesite;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnimeRepo extends MongoRepository<Anime, ObjectId> {
    Optional<Anime> findAnimeByDbi(String dbi);
}
