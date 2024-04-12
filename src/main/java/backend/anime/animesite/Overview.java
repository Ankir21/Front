package backend.anime.animesite;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "overviews")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Overview {
    @Id
    private String id;
    // Изменили тип на String
    private String body;

    public Overview(String body) {
        this.body = body;
    }


}
