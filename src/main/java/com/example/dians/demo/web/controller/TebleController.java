package com.example.dians.demo.web.controller;

import com.example.dians.demo.service.PlaceService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/table")
public class TebleController {

    private final PlaceService placeService;

    public TebleController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @GetMapping
    public String getTable(Model model) {
        model.addAttribute("places", placeService.listAll());
        return "table";
    }
}
