package backend.anime.animesite;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OverviewRepo extends MongoRepository<Overview,Object> {
}
