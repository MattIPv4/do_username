package dousername

import (
	"math/rand"
	"strings"
	"time"
)

func random(arr []string) string {
	rand.Seed(time.Now().UnixNano())
	return arr[rand.Intn(len(arr))]
}

func randomDesc(seaCreaturess []string, randNoun string, descriptors []string, verbs []string) string {
	if !contains(seaCreaturess, randNoun) {
		return random(descriptors)
	}
	return random(append(descriptors, verbs...))
}

func contains(arr []string, str string) bool {
	for _, a := range arr {
		if a == str {
			return true
		}
	}
	return false
}

func capitalize(arr []string) string {
	endArr := []string{}
	for _, word := range arr {
		endArr = append(endArr, strings.Title(word))
	}
	return strings.Join(endArr[:], "")
}

var seaCreatures = []string{"walrus", "seal", "fish", "shark", "clam", "coral", "whale", "crab", "lobster", "starfish", "eel", "dolphin", "squid", "jellyfish", "ray", "shrimp", "mantaRay", "angler", "snorkler", "scubaDiver", "urchin", "anemone", "morel", "axolotl"}
var seaObjects = []string{"boat", "ship", "submarine", "yacht", "dinghy", "raft", "kelp", "seaweed", "anchor"}
var adjectives = []string{"cute", "adorable", "lovable", "happy", "sandy", "bubbly", "friendly", "floating", "drifting"}
var size = []string{"large", "big", "small", "giant", "massive", "tiny", "little"}
var verbs = []string{"swimming", "sleeping", "eating", "hiding"}
var colors = []string{"blue", "blueGreen", "darkCyan", "electricBlue", "greenBlue", "lightCyan", "lightSeaGreen", "seaGreen", "turquoise", "aqua", "aquamarine", "teal", "cyan", "gray", "darkBlue", "cerulean", "azure", "lapis", "navy"}
var seaList = append(seaCreatures, seaObjects...)
var descriptors = append(adjectives, size...)

// generate : Returns a random DO username
func generate() string {
	randNoun := random(seaList)
	randDesc := randomDesc(seaCreatures, randNoun, descriptors, verbs)
	randColor := random(colors)

	if len(randDesc+randNoun+randColor) <= 30 {
		return capitalize([]string{randDesc, randColor, randNoun})
	} else if len(randDesc+randColor) <= 30 {
		return capitalize([]string{randDesc, randColor})
	} else if len(randColor+randNoun) <= 30 {
		return capitalize([]string{randColor, randColor})
	} else {
		return capitalize([]string{randNoun})
	}
}
