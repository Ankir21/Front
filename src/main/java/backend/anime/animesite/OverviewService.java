package backend.anime.animesite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OverviewService {
@Autowired
    private OverviewRepo overviewRepo;
@Autowired
    private MongoTemplate mongoTemplate;

    public Overview createOverview(String overviewBody,String dbi){
        Overview overview = overviewRepo.insert( new Overview(overviewBody));

        mongoTemplate.update(Anime.class).matching(Criteria.where("dbi").is(dbi))
                        .apply(new Update().push("overviewIds").value(overview))
                .first();
        return overview;
    }

    public Optional<Overview> getOverviewById(String dbi) {
        return overviewRepo.findById(dbi);
    }


}
