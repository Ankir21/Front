package backend.anime.animesite;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;


@Document(collection = "anime")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Anime {
    @Id

    private Object id;
    private String dbi;
    private String name;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String>genres;
    private List<String>backdrops;
    @DocumentReference
    private List<Overview> overviewIds;



    
}
