package backend.anime.animesite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/overview")
public class OverviewController {
    @Autowired
    private OverviewService overviewService;

    @PostMapping()
    public ResponseEntity<Overview> createOverview(@RequestBody Map<String,String>payload){
         return new ResponseEntity<Overview>(overviewService.createOverview(payload.get("overviewBody"),
                 payload.get("dbi")), HttpStatus.CREATED);
    }

    @GetMapping("/{dbi}")
    public ResponseEntity<Overview> getOverviewById(@PathVariable String dbi) {
        Optional<Overview> overview = overviewService.getOverviewById(dbi);
        return overview.map(ov -> ResponseEntity.ok().body(ov))
                .orElse(ResponseEntity.notFound().build());
    }


}
